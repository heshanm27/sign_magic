
import { View, Text,ActivityIndicator,FlatList } from 'react-native'
import {useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacing from '@src/theme/Spacing';
import LevelCard from '@src/components/card/level';
import Dimensions from '@src/theme/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
type Props = {}

const MathLevel = ({ route, navigation }: any) => {
  const level = route.params.id;
  const [isLoading, setIsLoading] = useState<boolean>(true);
   const [questions, setQuestions] = useState<any>([]);
   const { t } = useTranslation();
    async function getAllQuestions() {
        try {
            const questionQuerySnapshot = await firestore().collection('math').doc(level? level :'beginner').collection('question').orderBy("qNo").get();
            const questionData = questionQuerySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            return questionData;
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    }

    async function getUserGameHistoryOfQuestion(questions:any) {
        try {

            // Get user game history for the user
            const userGameHistoryQuerySnapshot = await firestore().collection('userGameHistory').doc('69eXeT4xIUe2iIVu06ODOlPGJyL2').collection('userGameHistory').get();
            const updatedQuestions = [...questions];


            // Update completed and score in updatedQuestions if the question exists
            userGameHistoryQuerySnapshot.forEach((doc) => {
                const data = doc.data();
                const questionId = doc.id;
                const questionIndex = updatedQuestions.findIndex((question: any) =>  question.id === questionId);
                if (questionIndex !== -1) {
                    updatedQuestions[questionIndex].completed = true;
                    updatedQuestions[questionIndex].score = data.score;
                }
            });

            return updatedQuestions;

        } catch (error) {
            console.error('Error fetching user game history:', error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
           const questions = await getAllQuestions();
           const updatedQuestion =  await getUserGameHistoryOfQuestion(questions);
            setQuestions(updatedQuestion);
            setIsLoading(false)
        };

        fetchData();
    }, []);

    console.log(questions)

  return (
     <SafeAreaView className="flex flex-1 flex-grow">
       <LinearGradient style={{
        flex:1,
      padding:Spacing.MEDIUM
      }}
      colors={["#00b5ff","#84daf3"]}
      >
    
       {isLoading ? (
         <ActivityIndicator size="large" color="#0000ff" />
       ) : (
         <View>
           <View className="mb-5">
             <Text className="text-4xl font-bold"> {t('select_level')} </Text>
             <Text className="text-1xl font-medium">
             {t('select_level_desc')}
             </Text>
           </View>

           <FlatList
             contentContainerStyle={{ gap: Spacing.MEDIUM, flexGrow: 1 ,paddingBottom:100 * Dimensions.RESPONSIVE_HEIGHT }}
             data={questions}
             renderItem={({ index,item }) => {
               console.log(item)
               return <LevelCard 
              title={item?.qNo}
              url='MathGame'
              isFirst={index === 0}
              levelData={{
                difficulty: level,
                ...item,
              
              }}
              isLast={index === questions.length - 1}
              backgroundColor="#00b5ff"
              borderColor="#84daf3"
               
               />;
             }}
           />
          </View>
       )}
     
     </LinearGradient>
   </SafeAreaView>
  )
}

export default MathLevel