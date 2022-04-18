import React, {useRef, useState} from 'react';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../components/Text';
import {editNote, NotesState} from '../../redux/slice/notes';
import {RootState} from '../../redux/store';
import {createNewNote} from '../../redux/slice/notes';

import useStylePicker from './editnote.style';

interface EditNoteProps {
  route: {
    params: {
      category: string;
      noteIndex?: number;
    };
  };
}

const EditNote = (props: EditNoteProps) => {
  const {notes} = useSelector<RootState, NotesState>(s => s.notes);
  const {category, noteIndex} = props.route.params;
  const dispatch = useDispatch();
  const [index] = useState(
    noteIndex !== undefined ? noteIndex : notes[category].length,
  );
  const [note, setNote] = useState(notes[category][index]);

  const styles = useStylePicker();

  const bodyRef = useRef<TextInput>(null);

  const saveNote = (value: {[key: string]: string}) => {
    const updatedNote = {
      ...note,
      ...value,
    };

    setNote(oldNote => {
      if (oldNote?.title === undefined) {
        dispatch(
          createNewNote({
            category,
            note: updatedNote,
          }),
        );
      } else {
        dispatch(
          editNote({
            index: index,
            note: updatedNote,
            category,
          }),
        );
      }
      return updatedNote;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.header}
        onEndEditing={e => saveNote({title: e.nativeEvent.text})}>
        <Text type={'sectionTitle'}>{note?.title || 'Input title'}</Text>
      </TextInput>
      <Text type={'boldBody'} style={styles.category}>
        {category}
      </Text>
      <TouchableOpacity
        style={styles.body}
        onPress={() => bodyRef.current?.focus()}>
        <TextInput
          multiline={true}
          blurOnSubmit={true}
          ref={bodyRef}
          onEndEditing={e => saveNote({description: e.nativeEvent.text})}>
          <Text type={'body'}>{note?.description || 'Input description'}</Text>
        </TextInput>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditNote;
