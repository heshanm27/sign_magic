import { View, Text,ActivityIndicator,FlatList } from 'react-native'
import {useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacing from '@src/theme/Spacing';
import LevelCard from '@src/components/card/level';
import Dimensions from '@src/theme/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
type Props = {}

const LanguageLevel = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
   const [questions, setQuestions] = useState<any>([]);

    async function getAllQuestions() {
        try {
            const questionQuerySnapshot = await firestore().collection('language').doc('beginner').collection('question').get();
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
      colors={["#ffc400","#f3df84"]}
      >
   
       {isLoading ? (
         <ActivityIndicator size="large" color="#0000ff" />
       ) : (
         <View>
           <View className="mb-5">
             <Text className="text-4xl font-bold">Select Level </Text>
             <Text className="text-1xl font-medium">
               Select a level to start playing
             </Text>
           </View>

           <FlatList
             contentContainerStyle={{ gap: Spacing.MEDIUM, flexGrow: 1 ,paddingBottom:100 * Dimensions.RESPONSIVE_HEIGHT }}
             data={questions}
             renderItem={({ index,item }) => {
               console.log(item)
               return <LevelCard 
              title={item?.qNo}
              levelData={item}
              url='LanguageGame'
              isFirst={index === 0}
              isLast={index === questions.length - 1}
              backgroundColor="#f3df84"
              borderColor="#ffc400"
               />;
             }}
           />
          </View>
       )}
  
     </LinearGradient>
   </SafeAreaView>
  )
}

export default LanguageLevel