import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 16,
  },
  footer: {
    position: 'absolute',
    right: 25,
    bottom: 25,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginHorizontal: 16,
  },
});
