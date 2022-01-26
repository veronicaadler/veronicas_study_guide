const DataStructures = {
    title: "Javascript Data Structures and Algorithms",
    url: "/javascript_data_structures_and_algorithms",
    subjects: [
        {title: "Big O Notation Basics",
        list: [

            { 
                title: "What is Big O Notation?",
                description: "Big O Notation gives us a way to analyze the efficiency of algorithms by comparing how the runtime of an algorithm changes in relation to the size of its input. This is important because the efficiency of our algorithms effects the performance of our apps.  Having Big O Notation allows us to compare different approaches and find algorithms in the code that may be slowing down our app."
            },
            {
                title: "Time and Space Complexity",
                description: "Big O Notation analyzes algorithms using two methods.  Time complexity analyzes the number of simple operations in an algorithm, while space complexity analyzes the space required by the algorithm to function."
            },
            {
                title: "Types of Time Complexity",
                description: [
                    {
                    title: "Constant",
                    img: "assets/constant_bigo.png",
                    description: "When the runtime is unaffected by the size of the input.  I.e., a function that runs simple addition or subtraction.  This will take the same amount of time irregardless of the size of the numbers to be added or subtracted."
                    },
                    {
                        title: "Variable",
                        img: "assets/variable_bigo.png",
                        description: "When the runtime is dependent on the size of the input.  For example, a loop has to execute as many times as the size of the input.",
                    }
                ],
            },
            {
                title: "Types of Variable Complexity",
                img: 'assets/nsquared_bigo.png',
                description: 'When the time complexity is n * n.  This occurs, for example, in a nested loop.'

            },
            ]}]}

export default DataStructures;