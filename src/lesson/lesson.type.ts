/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

/*
    GraphQL can sense the type of the of the variable based on the type provided for the proprety but for the ID its a good practice to specific it as an ID
*/

@ObjectType('Lesson') // by default the class would be named as LessonType but we can customize it by passing a string
export class LessonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field((type) => [StudentType])
  students: string[];
}
