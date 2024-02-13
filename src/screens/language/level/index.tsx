import { View, Text } from 'react-native'
import {useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore';
type Props = {}

const LanguageLevel = (props: Props) => {

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
        };

        fetchData();
    }, []);

    console.log(questions)

  return (
    <View>
      <Text>index</Text>
      {
        questions.map((question: any) => {
          return (
            <View key={question.id}>
              <Text>{question.id}</Text>
              <Text>{question.question}</Text>
              <Text>{question.answer}</Text>
              <Text>{question.completed}</Text>
              <Text>{question.score}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default LanguageLevel