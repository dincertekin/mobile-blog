import React from "react";
import {
	FlatList,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { useState, useEffect } from "react";
import { Shadow } from "react-native-shadow-2";

export default function HomeScreen(props) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("http://10.0.2.2:3000/posts", { method: "GET" })
		.then((res) => res.json())
		.then((data) => setPosts(data))
		.catch((err) => console.log(err));
	}, []);

	return (
		<View style={styles.container}>
		<View style={styles.header}>
			<View style={styles.searchContainer}>
			<Image source={require("../assets/icons/searchIcon.png")} />
			<TextInput style={styles.searchInput} placeholder="Search..." />
			</View>
			<Image source={require("../assets/icons/bellIcon.png")} />
		</View>

		<View style={styles.recommendedSection}>
			<Text style={styles.sectionTitle}>Recommended</Text>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{posts.length > 0 && (
				<TouchableWithoutFeedback
				onPress={() =>
					props.navigation.navigate("BlogPost", { id: posts[0].postID })
				}
				>
				<View style={styles.blogItem}>
					<Image
					style={styles.blogImage}
					source={{ uri: posts[0].postImageURL }}
					/>
					<Text style={styles.blogTitle}>{posts[0].postTitle}</Text>
					<View style={styles.blogDetails}>
					<Text style={styles.blogAuthor}>
						By:{" "}
						<Text style={styles.blogAuthorName}>
						{posts[0].postAuthor}
						</Text>
					</Text>
					<Text style={styles.blogDate}>
						{posts[0].postDate} · {posts[0].postViews} views
					</Text>
					</View>
				</View>
				</TouchableWithoutFeedback>
			)}
			</ScrollView>
		</View>

		<View style={styles.divider} />

		<View style={styles.categorySection}>
			<View style={[styles.categoryButton, styles.activeCategory]}>
			<Text style={styles.activeCategoryText}>All</Text>
			</View>
			<View style={[styles.categoryButton, styles.inactiveCategory]}>
			<Text style={styles.inactiveCategoryText}>Technology</Text>
			</View>
			<View style={[styles.categoryButton, styles.inactiveCategory]}>
			<Text style={styles.inactiveCategoryText}>Business</Text>
			</View>
		</View>

		<FlatList
			data={posts}
			keyExtractor={(item) => item.postID.toString()}
			renderItem={({ item }) => (
			<TouchableWithoutFeedback
				onPress={() =>
				props.navigation.navigate("BlogPost", { id: item.postID })
				}
			>
				<View
				style={{
					marginLeft: 25,
					marginTop: 20,
					display: "flex",
					flexDirection: "row",
					width: 270,
				}}
				>
				<Image
					style={{ width: 96, height: 79, borderRadius: 16 }}
					source={{ uri: item.postImageURL }}
				/>
				<View
					style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					}}
				>
					<View
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
					>
					<Text
						style={{
						marginLeft: 10,
						backgroundColor: "#F2F2F2",
						color: "#2C2C2C",
						padding: 4,
						fontSize: 10,
						}}
					>
						{item.postCategory}
					</Text>
					<Text
						style={{
						marginLeft: 10,
						color: "#828282",
						fontFamily: "OpenSans-Regular",
						fontSize: 12,
						}}
					>
						{item.postDate} · {item.postViews} views
					</Text>
					</View>
					<Text
					style={{
						marginLeft: 10,
						fontFamily: "OpenSans-Bold",
						fontSize: 16,
					}}
					>
					{item.postTitle}
					</Text>
				</View>
				</View>
			</TouchableWithoutFeedback>
			)}
		/>

		<Shadow distance={10}>
			<View style={styles.bottomNavbar}>
			<Image source={require("../assets/icons/homeIcon.png")} />
			<Image source={require("../assets/icons/bookmarkIcon.png")} />
			<Image source={require("../assets/icons/profileIcon.png")} />
			</View>
		</Shadow>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	header: {
		marginTop: 46,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	searchContainer: {
		backgroundColor: "#F4F4F4",
		borderRadius: 16,
		paddingHorizontal: 20,
		paddingVertical: 10,
		width: 330,
		flexDirection: "row",
		alignItems: "center",
	},
	searchInput: {
		flex: 1,
		marginLeft: 10,
		fontFamily: "OpenSans-Regular",
		fontSize: 16,
		color: "#BDBDBD",
	},
	recommendedSection: {
		marginTop: 26,
		marginLeft: 26,
	},
	sectionTitle: {
		fontFamily: "OpenSans-Bold",
		fontSize: 26,
		color: "#2C2C2C",
		marginBottom: 20,
	},
	blogItem: {
		width: 320,
	},
	blogImage: {
		width: 269,
		height: 156,
		borderRadius: 16,
	},
	blogTitle: {
		marginTop: 10,
		fontFamily: "OpenSans-Bold",
		fontSize: 20,
	},
	blogDetails: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 10,
	},
	blogAuthor: {
		color: "#333333",
	},
	blogAuthorName: {
		textDecorationLine: "underline",
		color: "#333333",
	},
	blogDate: {
		color: "#828282",
		paddingRight: 30,
	},
	divider: {
		alignSelf: "center",
		borderBottomColor: "#E0E0E0",
		borderBottomWidth: 1,
		marginTop: 25,
		width: 390,
	},
	categorySection: {
		marginTop: 16,
		marginLeft: 26,
		flexDirection: "row",
		alignItems: "center",
	},
	categoryButton: {
		borderRadius: 6,
		paddingVertical: 6,
		paddingHorizontal: 8,
	},
	activeCategory: {
		backgroundColor: "#2C2C2C",
	},
	activeCategoryText: {
		color: "#FFFFFF",
	},
	inactiveCategory: {
		marginLeft: 8,
		backgroundColor: "#FFFFFF",
		borderColor: "#BDBDBD",
		borderWidth: 1,
	},
	inactiveCategoryText: {
		color: "#828282",
	},
	bottomNavbar: {
		width: "100%",
		height: 71,
		alignItems: "center",
		justifyContent: "space-around",
		flexDirection: "row",
	},
});