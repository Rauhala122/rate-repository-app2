import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20
    },
    image: {
        flexGrow: 0
    },
    description: {
        flexGrow: 6,
        marginLeft: 20,
        marginRight: 40,
        alignSelf: 'flex-start'
    },
    flexContainer: {
        flexDirection: "row",
        alignSelf: "flex-start",
        display: "flex"
    },
    marginTop: {
        marginTop: 15
    },
    stars: {
        flexGrow: 2
    },
    forks: {
        flexGrow: 2
    },
    reviews: {
        flexGrow: 2
    },
    rating: {
        flexGrow: 2
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 3
    },
    language: {
        backgroundColor: "#0366d6",
        padding: 8,
        marginTop: 10,
        borderRadius: 5,
        alignSelf: 'flex-start'
    }
  });
  

const RepositoryItem = ({ item }) => {
    let stars = item.stargazersCount
    let forks = item.forksCount

    if (stars > 1000) {
        stars = Math.round(stars / 100) / 10
    } 

    if (forks > 1000) {
        forks = Math.round(forks / 100) / 10
    }
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer}>
                <View style={styles.image}>
                    <Image //change imagePath with the real path of your image, for example ./src/image/image.jpg
                        style={styles.logo}
                        source={{ uri: item.ownerAvatarUrl}}
                    />
                </View>
                <View style={styles.description}>
                    <Text fontWeight="bold" fontSize="subheading">{item.fullName}/</Text>
                    <Text color="textSecondary" fontSize="subheading" style={{marginTop: 7}}>{item.description}</Text>
                    <View style={styles.language}>
                        <Text fontWeight="bold" fontSize="subheading" style={{color: "#ffffff"}}>{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.flexContainer, styles.marginTop]}>
                <View style={styles.stars}>
                    <Text fontWeight="bold" fontSize="subheading" style={{textAlign: "center"}}>{stars}k</Text>
                    <Text color="textSecondary" fontSize="subheading" style={{marginTop: 7, textAlign: "center"}}>Stars</Text>
                </View>
                <View style={styles.forks}>
                    <Text fontWeight="bold" fontSize="subheading" style={{textAlign: "center"}}>{forks}k</Text>
                    <Text color="textSecondary" fontSize="subheading" style={{marginTop: 7, textAlign: "center"}}>Forks</Text>
                </View>
                <View style={styles.reviews}>
                    <Text fontWeight="bold" fontSize="subheading" style={{textAlign: "center"}}>{item.reviewCount}</Text>
                    <Text color="textSecondary" fontSize="subheading" style={{marginTop: 7, textAlign: "center"}}>Reviews</Text>
                </View>
                <View style={styles.rating}>
                    <Text fontWeight="bold" fontSize="subheading" style={{textAlign: "center"}}>{item.ratingAverage}</Text>
                    <Text color="textSecondary" fontSize="subheading" style={{marginTop: 7, textAlign: "center"}}>Rating</Text>
                </View>
            </View>
        </View>
    )
}

export default RepositoryItem