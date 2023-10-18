import { makeQuestion } from 'test/factories/make-question'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Slug } from '../../enterprise/entities/values-objects/slug'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'

let sut: GetQuestionBySlugUseCase
let inMemoryQuestionsRepository: InMemoryQuestionsRepository

describe('Get Question By Slug', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to get a question by slug', async () => {
    const newQuestion = makeQuestion({
      slug: Slug.create('new-question'),
    })

    await inMemoryQuestionsRepository.create(newQuestion)

    const result = await sut.execute({
      slug: 'new-question',
    })

    if (result.isRight()) {
      expect(result.value?.question.id).toBeTruthy()
      expect(result.value?.question.title).toEqual(newQuestion.title)
    }
  })
})
