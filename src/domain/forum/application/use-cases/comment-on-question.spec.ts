import { makeQuestion } from 'test/factories/make-question'
import { CommentOnQuestionUseCase } from './comment-on-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { InMemoryQuestionCommentsRepository } from 'test/repositories/in-memory-question-comment-repository'

let sut: CommentOnQuestionUseCase
let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryQuestionCommentsRepository: InMemoryQuestionCommentsRepository

describe('Comment on question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    inMemoryQuestionCommentsRepository =
      new InMemoryQuestionCommentsRepository()
    sut = new CommentOnQuestionUseCase(
      inMemoryQuestionsRepository,
      inMemoryQuestionCommentsRepository,
    )
  })

  it('should be able to comment on question', async () => {
    const question = makeQuestion()

    await inMemoryQuestionsRepository.create(question)

    await sut.execute({
      content: 'Comment text',
      questionId: question.id.toString(),
      authorId: question.authorId.toString(),
    })

    expect(inMemoryQuestionCommentsRepository.items[0].content).toEqual(
      'Comment text',
    )
  })
})
