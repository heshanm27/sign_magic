import { View, Text, FlatList, ScrollView, Pressable, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, Card, Header } from '@rneui/themed';
import { useTranslation } from 'react-i18next';

import LangImg from '../../assets/lang/home.png'
import EnvImg from '../../assets/env/home.png'
import MathImg from '../../assets/math/home.png'
import GenImg from '../../assets/social/home.png'

import { horizontalScale, verticalScale } from '@src/utils/metrics';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};
interface HomeCard {
  title: string,
  description: string,
  image: any,
  color: string
}
const Home = (props: Props) => {

  const { t } = useTranslation()

  console.log
  const HomeCards: HomeCard[] = [{
    description: 'The idea with React Native Elements is more about component structure than actual design.',
    title: 'Sinhala',
    image: LangImg,
    color: '#FEDB85'
  }, {
    description: 'The idea with React Native Elements is more about component structure than actual design.',
    title: 'Mathematics',
    image: MathImg,
    color: '#69DFE5'
  }, {
    description: 'The idea with React Native Elements is more about component structure than actual design.',
    title: 'Env Studies',
    image: EnvImg,
    color: '#E9FFB6'
  }, {
    description: 'The idea with React Native Elements is more about component structure than actual design.',
    title: 'Gen Skills',
    image: GenImg,
    color: "#FEB3C5"
  }]




  return (
    <SafeAreaView className='flex flex-1 '>
      <LinearGradient colors={['#22c1c3', '#fdbb2d']} style={{
          flex: 1,
      
      }}>
      {/* <Header rightComponent={
        <View className='flex flex-row items-center'>
          <Avatar
            size={'small'}
            rounded
            icon={{ name: 'pencil', type: 'font-awesome' }}
            containerStyle={{ backgroundColor: '#6733b9' }}
          />
          <Text className='text-white ml-2'>John Doe</Text>
        </View>

      } /> */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        margin: 8,

        borderRadius: 36,
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 15, // For Android devices
        backgroundColor: '#fff',

      }}


      >
        <Avatar
          size={'medium'}
          rounded
          icon={{ name: 'pencil', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#6733b9' }}
        />
        <View>
          <Text className='text-lg font-semibold '>Exp Level</Text>
          <Text className=''>Beginner</Text>
        </View>
      </View>


      <View>
        <Text className='text-4xl font-bold font mt-2 p-1'>{t('lets-play')}</Text>
        <Text className='text-1xl font-bold font mb-2 p-1'> {t('choose-category')}</Text>
      </View>
      <View className='flex flex-row flex-wrap    rounded-3xl'>
        <FlatList
          data={HomeCards}
          renderItem={({ item, index }) => {
            return (
              <View key={`home-card${index}`} style={{
                flex: 1,
                margin: 8,
                borderRadius: 16,
                backgroundColor: item.color,
                shadowColor: "#000",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.5, // Optional: Adjust the opacity of the shadow
                shadowRadius: 4, // Optional: Adjust the size of the shadow
                elevation: 5,

              }}>
                <Pressable>
                  <View style={{
                    flex: 1,
                    borderTopEndRadius: 16,
                    borderTopStartRadius: 16,
                    padding: 16,
                    backgroundColor: item.color,
                    alignItems: 'center',
                  }}>
                    <Image source={item.image} style={{
                      width: 115,
                      height: 150,
                      borderRadius: 4,
                      resizeMode: 'contain'

                    }} />

                  </View>
                  <View style={{
                    flex: 1,
                    borderBottomEndRadius: 16,
                    borderBottomStartRadius: 16,
                    backgroundColor: item.color,
                    padding: 8,
                  }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center',


                      }}
                    >{item.title}</Text>
                  </View>
                </Pressable>
              </View>
            )
          }}
          numColumns={2}
        />
      </View>



      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});
export default Home;
