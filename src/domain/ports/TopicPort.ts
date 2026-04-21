import type { Topic } from '../models/Topic';

export interface TopicPort {
  getTopicsBySectionId(sectionId: string): Topic[];
  getTopicById(id: string): Topic | undefined;
}
