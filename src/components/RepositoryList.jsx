import React, {useState, useEffect} from 'react';
import { FlatList, View, StyleSheet , Text} from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, loading} = useRepositories();
  

  if (loading) {
    return <Text>Loading...</Text>
  }

  const repositoryNodes = data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <View>
    <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={RepositoryItem}
    />
    </View>
  );
};

export default RepositoryList;