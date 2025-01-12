This error occurs when using the FlatList component in React Native and providing an invalid key prop to the items being rendered.  React Native requires unique keys for efficient rendering and identifying list items.  If keys are not unique or are missing, FlatList may exhibit unexpected behavior, including incorrect rendering, item duplication, or crashes.

Example of problematic code:

```javascript
<FlatList
  data={[{id: 1}, {id: 1}, {id: 2}]}
  renderItem={({item}) => <Text>{item.id}</Text>}
  keyExtractor={(item) => item.id}
/>
```

In this example, the keyExtractor function uses the `id` property, but the data contains duplicate `id` values. This will lead to the `Invalid key` error because React Native can't distinguish between the two items with `id: 1`.