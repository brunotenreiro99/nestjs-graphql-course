/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInptut } from './assign-students-to-lesson.input';

@Resolver((of) => LessonType) // defines what this resolver is going to resolve
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation((returns) => LessonType)
  assignStudentToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentToLessonInput: AssignStudentsToLessonInptut,
  ) {
    const { lessonId, studentIds } = assignStudentToLessonInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
  }
}
