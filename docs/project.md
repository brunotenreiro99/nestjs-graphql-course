## School Managment Application

    Lesson Module will have a Lesson Resolver, a resolver is a Controller that will communicate with the Service and the Service will comunicate with the Entity

    Then we will have a Student Module, that has a Student Resolver that comunicates with the Student Service that communicates with the Student Entity.

    Overall we will be able to retrive the lessons and the students that belong to that lessons with a unique call.

    All the data is going to be stored to a MongoDB ORM

    AutoSchemaFile: true -> this flag tells nestjs to save the schema in memory and and regenerate each time we run the application.

    Even tought resolver works like a controller, we need to add them in the providers of the module!!
    
    Example of a mutation:

    mutation {
        createLesson (  👈 Here we send the data for the method
            name: "Lesson 1"
            startDate: "2024-03-27T00:00:00.00Z"
            endDate: "2024-03-27T00:30:00.00Z"
        ) { 👈 Here we define what we want to be returned
            name
        }
    }

    GraphQL expects returned array as following: @Query((returns) => [LessonType])