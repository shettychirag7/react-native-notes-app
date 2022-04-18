import React, {useMemo, useState} from 'react';
import {Alert, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/native';

import Fab from '../../components/Fab';
import NoteCard from '../../components/NoteCard';
import {deleteNote, NotesState} from '../../redux/slice/notes';
import {RootState} from '../../redux/store';
import {styles} from './notelist.style';
import Text from '../../components/Text';

interface NoteListParams {
  route: {
    params: {
      category: string;
    };
  };
}

const NoteList = (props: NoteListParams) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {notes} = useSelector<RootState, NotesState>(s => s.notes);
  const [refresh, setRefresh] = useState(false);

  const category = props.route.params.category;
  const data = useMemo(() => notes[category], [notes, category]);

  const onPressAdd = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'EditNote',
        params: {
          category,
        },
      }),
    );
  };

  const onEditNote = (index: number) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'EditNote',
        params: {
          category,
          noteIndex: index,
        },
      }),
    );
  };

  const onDeleteNote = (index: number) => {
    Alert.alert('Delete note', 'Are you sure you want to delete this note?', [
      {
        text: 'Canel',
        style: 'cancel',
      },
      {
        text: 'Confirm',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteNote({category, index}));
          setRefresh(!refresh);
        },
      },
    ]);
  };

  const EmptyView = () => (
    <View style={styles.empty} testID="empty_view">
      <Text type="body" style={styles.emptyText}>
        {'No notes found. Add a new note by clicking the plus icon'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <EmptyView />
      ) : (
        <FlatList
          data={data}
          extraData={refresh}
          renderItem={({item, index}) => (
            <NoteCard
              {...item}
              category={category}
              onPress={() => onEditNote(index)}
              onLongPress={() => onDeleteNote(index)}
            />
          )}
          keyExtractor={(item, index) => `item_${index}`}
          numColumns={2}
        />
      )}
      <Fab
        testID="fab_add"
        icon="add"
        style={styles.footer}
        onPress={onPressAdd}
      />
    </View>
  );
};

export default NoteList;
