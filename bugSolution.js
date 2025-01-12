To fix the 'Invalid key' error in React Native's FlatList, make sure the keys provided by `keyExtractor` are unique. If your data structure doesn't inherently provide a unique key, you can create one. 

Here's how you can modify the code to correct the issue:

```javascript
<FlatList
  data={[{id: 1, uniqueKey: '1a'}, {id: 1, uniqueKey: '1b'}, {id: 2, uniqueKey: '2a'}]}
  renderItem={({item}) => <Text>{item.id}</Text>}
  keyExtractor={(item) => item.uniqueKey}
/>
```

This version adds a `uniqueKey` field to each data item. The `keyExtractor` now utilizes this unique key, preventing the error. Alternatively, you can use the item's index or a combination of fields to generate unique keys if a unique identifier isn't readily available.