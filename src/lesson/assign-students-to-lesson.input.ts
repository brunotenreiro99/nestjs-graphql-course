/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInptut {
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true }) // uuid version 4, for each item in the array
  @Field((type) => [ID])
  studentIds: string[];
}
