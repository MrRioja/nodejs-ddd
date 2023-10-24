import { Entity } from '@/core/entities/entity'
import { Optional } from '@/core/types/optional'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface NotificationProps {
  title: string
  readAt?: Date
  content: string
  createdAt: Date
  recipientId: UniqueEntityID
}

export class Notification extends Entity<NotificationProps> {
  get title(): string {
    return this.props.title
  }

  get readAt(): Date | undefined {
    return this.props.readAt
  }

  get content(): string {
    return this.props.content
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get recipientId(): UniqueEntityID {
    return this.props.recipientId
  }

  public static create(
    props: Optional<NotificationProps, 'createdAt'>,
    id?: UniqueEntityID,
  ): Notification {
    const notification = new Notification(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return notification
  }
}
