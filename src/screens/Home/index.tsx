import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Fab from '../../components/Fab';
import ListItem from '../../components/ListItem';
import {
  addCategory,
  CategoryState,
  deleteCategory,
  editCategory,
} from '../../redux/slice/categories';
import {
  onCreateCategory,
  onDeleteCategory,
  onEditCategory,
} from '../../redux/slice/notes';
import {RootState} from '../../redux/store';
import useStylePicker from './home.style';

const Home = () => {
  const dispatch = useDispatch();

  const {categories} = useSelector<RootState, CategoryState>(s => s.categories);

  const styles = useStylePicker();

  const ifCategoryExists = (value: string) => {
    return categories.filter(item => item === value).length > 0;
  };

  const onUpdate = (oldValue: string, newValue: string, index: number) => {
    if (!ifCategoryExists(newValue)) {
      dispatch(
        editCategory({
          index,
          value: newValue,
        }),
      );
      dispatch(
        onEditCategory({
          old: oldValue,
          new: newValue,
        }),
      );
    } else {
      Alert.alert('Category already exists', undefined, [
        {
          text: 'Dismiss',
          style: 'cancel',
        },
      ]);
    }
  };

  const onDelete = (index: number) => {
    Alert.alert(
      'Delete Category',
      'Are you sure you want to delete category?',
      [
        {
          text: 'Canel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          style: 'destructive',
          onPress: () => {
            dispatch(onDeleteCategory(categories[index]));
            dispatch(deleteCategory(index));
          },
        },
      ],
    );
  };

  const addNewCategory = () => {
    dispatch(addCategory(`Category ${categories.length + 1}`));
    dispatch(onCreateCategory(`Category ${categories.length + 1}`));
  };

  return (
    <View style={styles.container}>
      <FlatList
        testID="category_list"
        data={categories}
        renderItem={({item, index}) => (
          <ListItem
            testID={`item_${index}`}
            id={index}
            name={item}
            onUpdate={value => onUpdate(item, value, index)}
            onLongPress={() => onDelete(index)}
          />
        )}
      />
      <Fab
        testID="fab_add"
        icon="add"
        style={styles.footer}
        onPress={addNewCategory}
      />
    </View>
  );
};

export default Home;
