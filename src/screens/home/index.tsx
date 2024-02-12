import { View, Text, Button, ScrollView, Pressable } from 'react-native';
import { Avatar, Card,Header } from '@rneui/themed';

type Props = {};

const Home = (props: Props) => {
  return (
    <ScrollView className='flex flex-1   p-2' >
  <Header rightComponent={
    <View className='flex flex-row items-center'>
      <Avatar
        size={'small'}
        rounded
        icon={{ name: 'pencil', type: 'font-awesome' }}
        containerStyle={{ backgroundColor: '#6733b9' }}
      />
      <Text className='text-white ml-2'>John Doe</Text>
    </View>
  
  }/>
        <View className='flex flex-row  rounded-full justify-between items-center pl-10 pr-10 pt-3 pb-3 bg-slate-800'>
          <Avatar
            size={'medium'}
            rounded
            icon={{ name: 'pencil', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#6733b9' }}
          />
          <View>
            <Text className='text-lg font-semibold text-white'>Exp Level</Text>
            <Text className='text-white'>Beginner</Text>
          </View>
        </View>
        <View>
        <Text className='text-4xl font-bold font mt-5'>Let's Play</Text>
        <Text className='text-1xl font-bold font mb-5'> Choose a category to start playing</Text>
        </View>
        <View className='flex flex-row flex-wrap  pb-5 bg-gray-600  rounded-3xl'>
          {
            [1, 2, 3, 4].map((_, index) => {
              return (
                <View className=' w-1/2 rounded-md' key={`card-${index}`}>
                  <Pressable  >
                  <Card containerStyle={{
                    borderRadius: 10,
           
                    elevation: 5,
                  
                  }} >
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />

                    <Text >
                      The idea with React Native Elements is more about component
                      structure than actual design.
                    </Text>

                  </Card>
                  </Pressable>
                </View>
              )
            })
          }
        </View>
      
      </ScrollView>

  );
};

export default Home;
