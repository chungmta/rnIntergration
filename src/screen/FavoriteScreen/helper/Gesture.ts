import Animated, { diff, lessThan, or } from 'react-native-reanimated';
const { event } = Animated;

export const onScrollEvent = (contentOffset: {
  x?: Animated.Node<number>;
  y?: Animated.Node<number>;
}) => {
  console.log(contentOffset);
  return event([
    {
      nativeEvent: {
        contentOffset,
      },
    },
  ]);
};
