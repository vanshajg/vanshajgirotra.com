import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  java,
  javascript,

  // Frontend
  react,

  // Backend
  graphql,
  springboot,

  // Cloud
  aws,
  docker,
  kubernetes,
  helm,

}

export const WorkStack = [
  Stack.java,
  Stack.go,
  Stack.springboot,
  Stack.javascript,
  Stack.docker,
  Stack.helm,
  Stack.aws,
  Stack.kubernetes,
  Stack.graphql,
  Stack.react,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.helm]: {
    value: 'Helm',
    color: Colors.helm,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.springboot]: {
    value: 'SpringBoot',
    color: Colors.springboot
  }
};
