export interface CardItem {
  id: number;
  title: string;
  children: CardItem[];
}

export const mockData: CardItem = {
  id: 1,
  title: '1',
  children: [
    {
      id: 2,
      title: '1-2',
      children: [
        {
          id: 21, title: '1-2-21', children: [
            { id: 21, title: '1-2-21', children: [] },
            { id: 22, title: '1-2-22', children: [] },
            {
              id: 23, title: '1-2-23', children: [
                { id: 21, title: '1-2-21', children: [] },
                { id: 22, title: '1-2-22', children: [] },
                {
                  id: 23, title: '1-2-23', children: [
                    { id: 21, title: '1-2-21', children: [] },
                    { id: 22, title: '1-2-22', children: [] },
                    { id: 23, title: '1-2-23', children: [] },
                  ]
                },
              ]
            },
          ]
        },
        { id: 22, title: '1-2-22', children: [] },
        { id: 23, title: '1-2-23', children: [] },
      ],
    },
    {
      id: 3,
      title: '1-3',
      children: [
        { id: 21, title: '1-2-21', children: [] },
        { id: 22, title: '1-2-22', children: [] },
        { id: 23, title: '1-2-23', children: [] },
      ],
    },
    {
      id: 4,
      title: '1-4',
      children: [],
    },
    {
      id: 5,
      title: '1-5',
      children: [],
    },
    {
      id: 6,
      title: '1-6',
      children: [],
    },
    {
      id: 7,
      title: '1-7',
      children: [],
    },
  ],
}

