import React, { useState, useEffect } from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
	ActivityIndicator,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function BlogPostScreen(props) {
	const postID = props.route.params.id;

	const [post, setPost] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPostData = async () => {
			try {
				const response = await fetch(`http://10.0.2.2:3000/posts/${postID}`);
				const data = await response.json();
				setPost(data[0]);
			} catch (error) {
				console.error("Failed to fetch post:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPostData();
	}, [postID]);

	if (loading) {
		return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color="#0000ff" />
		</View>
		);
	}

	return (
		<View style={styles.container}>
		<View style={styles.header}>
			<TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
			<Image source={require("../assets/icons/backIcon.png")} />
			</TouchableWithoutFeedback>
			<View style={styles.searchContainer}>
			<Image source={require("../assets/icons/searchIcon.png")} />
			<TextInput style={styles.searchInput} placeholder="Search..." />
			</View>
			<Image source={require("../assets/icons/bellIcon.png")} />
		</View>

		<ScrollView style={styles.content}>
			{post && (
			<>
				<Image
				style={{
					width: 365,
					height: 234,
					borderRadius: 16,
					marginLeft: 24,
				}}
				source={{ uri: post.postImageURL }} // Assuming your API returns an image URL
				/>
				<View
				style={{
					marginLeft: 20,
					marginRight: 20,
					marginTop: 15,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
				>
				<Text
					style={{
					backgroundColor: "#F2F2F2",
					borderRadius: 6,
					padding: 10,
					fontFamily: "OpenSans-Regular",
					fontSize: 12,
					}}
				>
					{post.postCategory}
				</Text>
				<Text
					style={{
					padding: 10,
					fontFamily: "OpenSans-Light",
					fontSize: 12,
					}}
				>
					{post.postDate} · {post.postViews} views
				</Text>
				</View>
				<Text
				style={{
					marginLeft: 20,
					marginTop: 10,
					fontFamily: "OpenSans-Bold",
					fontSize: 26,
				}}
				>
				{post.postTitle}
				</Text>
				<Text style={styles.blogAuthor}>
				By: <Text style={styles.blogAuthorName}>{post.postAuthor}</Text>
				</Text>
				<View>
				<Text
					style={{
					marginTop: 15,
					marginLeft: 20,
					marginRight: 20,
					fontFamily: "OpenSans-Regular",
					fontSize: 16,
					}}
				>
					{post.postContent}
				</Text>
				</View>
			</>
			)}
		</ScrollView>

		<Shadow distance={5}>
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
	content: {
		marginTop: 26,
	},
	blogAuthor: {
		marginLeft: 20,
		color: "#333333",
	},
	blogAuthorName: {
		textDecorationLine: "underline",
		color: "#333333",
	},
	bottomNavbar: {
		width: "100%",
		height: 71,
		alignItems: "center",
		justifyContent: "space-around",
		flexDirection: "row",
	},
});
