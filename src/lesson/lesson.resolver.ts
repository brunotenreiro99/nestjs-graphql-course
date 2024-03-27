import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType) // defines what this resolver is going to resolve
export class LessonResolver {
    @Query(returns => LessonType)
    lesson() {
        return {
            id: 'dsfd',
            name: 'ddd',
            startDate: new Date().toISOString(),
            endDate: new Date().toISOString(),
        }
    }
}
