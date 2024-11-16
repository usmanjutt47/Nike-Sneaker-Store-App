import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AntDesign from "@expo/vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;

const DATA = [
  { id: "1", text: "All Shoes" },
  { id: "2", text: "Outdoor" },
  { id: "3", text: "Tennis" },
  { id: "4", text: "Sneakers" },
];

const IMAGEDATA = [
  { id: "1", imageUrl: require("../assets/images/shoes_1.png") },
  { id: "2", imageUrl: require("../assets/images/shoes_2.png") },
  { id: "3", imageUrl: require("../assets/images/shoes_1.png") },
  { id: "4", imageUrl: require("../assets/images/shoes_2.png") },
  { id: "5", imageUrl: require("../assets/images/shoes_1.png") },
];

const renderImageItem = ({ item }) => (
  <View style={styles.scrollImageContainer}>
    <Pressable
      style={{
        backgroundColor: "#fff",
        elevation: 2,
        width: "85%",
        borderRadius: 14,
        marginBottom: 10,
        marginRight: 10,
      }}
    >
      <Image source={item.imageUrl} style={styles.scrollImage} />
    </Pressable>
  </View>
);

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("1");
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  const handleSearchChange = useCallback((text) => {
    setSearch(text);
  }, []);

  const RenderItem = ({ title, id }) => {
    const isSelected = id === selectedId;

    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          {
            backgroundColor: isSelected ? "#0D6EFD" : "#fff",
            elevation: 2,
            borderColor: "#0D6EFD",
          },
        ]}
        onPress={() => setSelectedId(id)}
      >
        <Text
          style={[
            styles.categoryButtonText,
            { color: isSelected ? "#fff" : "#000" },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/header.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <Image
              source={require("../assets/images/homeText.png")}
              style={styles.imageText}
            />
            <TouchableOpacity style={styles.cartContainer}>
              <Image
                source={require("../assets/images/cart.png")}
                style={styles.iconImage}
              />
              <Pressable style={styles.dot} />
            </TouchableOpacity>
          </View>

          <View style={styles.searchSection}>
            <View style={styles.inputContainer}>
              <Feather name="search" size={24} color="#6A6A6A" />
              <TextInput
                placeholder="Looking for shoes"
                style={styles.inputText}
                value={search}
                onChangeText={handleSearchChange}
              />
            </View>
            <TouchableOpacity style={styles.filtersContainer}>
              <Image
                source={require("../assets/images/filters.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.categoryText}>Select Category</Text>

          <View>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <RenderItem title={item.text} id={item.id} />
              )}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.selectCategoryText}>Select Category</Text>
            <Text style={styles.selectCategoryText2}>See all</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity style={styles.item}>
              <Image
                source={require("../assets/images/shoes_1.png")}
                style={styles.firstImage}
              />
              <Text style={styles.sellerText}>BEST SELLER</Text>
              <Text style={styles.title}>Nike Jordan</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.price}>$ 302.00</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <AntDesign name="plus" size={24} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
              <Image
                source={require("../assets/images/shoes_2.png")}
                style={styles.firstImage}
              />
              <Text style={styles.sellerText}>BEST SELLER</Text>
              <Text style={styles.title}>Nike Air Max</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.price}>$ 752.00</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <AntDesign name="plus" size={24} color="#fff" />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <Text style={styles.selectCategoryText}>New Arrivals</Text>
            <Text style={styles.selectCategoryText2}>See all</Text>
          </View>
          <View>
            <FlatList
              data={IMAGEDATA}
              renderItem={renderImageItem}
              keyExtractor={(item) => item.id}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                alignSelf: "center",
              }}
              ref={flatListRef}
              onScroll={handleScroll}
              scrollEventThrottle={16}
            />
          </View>
          <View style={styles.indicatorContainer}>
            {IMAGEDATA.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentIndex === index ? styles.activeIndicator : null,
                ]}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F9",
  },
  innerContainer: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  header: {
    height: 80,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconImage: {
    resizeMode: "contain",
    height: 30,
    width: 30,
  },
  imageText: {
    resizeMode: "contain",
    height: 46,
    width: 135,
  },
  cartContainer: {
    height: 44,
    width: 44,
    backgroundColor: "#fff",
    borderRadius: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 22,
    backgroundColor: "#FD1600",
    position: "absolute",
    top: 4,
    right: 0,
  },
  searchSection: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  inputContainer: {
    height: 52,
    width: "83%",
    backgroundColor: "#fff",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    elevation: 2,
  },
  inputText: {
    color: "#6A6A6A",
    flex: 1,
  },
  filtersContainer: {
    height: 52,
    width: 52,
    backgroundColor: "#0D6EFD",
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    color: "#2B2B2B",
    marginTop: "5%",
    marginBottom: "5%",
    fontFamily: "Raleway-SemiBold",
  },
  categoryButton: {
    height: 40,
    width: 108,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 3,
  },
  categoryButtonText: {
    fontSize: 16,
    fontFamily: "Raleway-SemiBold",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
    marginBottom: "5%",
  },
  selectCategoryText: {
    fontSize: 15,
    color: "#2B2B2B",
    fontFamily: "Raleway-SemiBold",
  },
  selectCategoryText2: {
    fontSize: 15,
    color: "#0D6EFD",
    fontFamily: "Raleway-Bold",
  },
  seeAllText: {
    fontSize: 14,
    color: "#0D6EFD",
    fontFamily: "Raleway-SemiBold",
  },
  item: {
    height: 200,
    width: 170,
    backgroundColor: "#fff",
    borderRadius: 14,
    elevation: 2,
  },
  firstImage: {
    resizeMode: "contain",
    width: "100%",
    height: "50%",
  },
  sellerText: {
    fontSize: 15,
    color: "#0D6EFD",
    fontFamily: "Raleway-SemiBold",
    fontWeight: "bold",
    marginLeft: 10,
  },
  title: {
    color: "#6A6A6A",
    fontWeight: "bold",
    marginLeft: 10,
    fontFamily: "Raleway-Bold",
  },
  price: {
    color: "#000",
    marginLeft: 10,
    fontWeight: "bold",
    marginTop: 5,
  },
  addButton: {
    position: "absolute",
    height: 50,
    width: 50,
    backgroundColor: "#0D6EFD",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 14,
  },

  scrollContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  scrollTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  flatListContainer: {
    alignItems: "center",
  },
  scrollImageContainer: {
    width: screenWidth, // Match screen width for centering
    justifyContent: "center", // Centers the image
    alignItems: "center",
  },
  scrollImage: {
    width: screenWidth * 0.6, // Adjust image size
    height: 200,
    borderRadius: 14,
    resizeMode: "contain",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: "#ccc",
    borderRadius: 4,
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: "#0D6EFD",
  },
});

export default Home;
