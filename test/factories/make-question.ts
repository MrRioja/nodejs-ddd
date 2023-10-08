import { faker } from '@faker-js/faker'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityID,
) {
  const question = Question.create(
    {
      content: faker.lorem.text(),
      title: faker.lorem.sentence(),
      authorId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return question
}
