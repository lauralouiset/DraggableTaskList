const initialData = {
  tasks: {
    'task-1' : {id: 'task-1', content: 'Take out the trash'},
    'task-2': { id: 'task-2', content: 'Wash the dishes' },
    'task-3': { id: 'task-3', content: 'Do the laundry' },
    'task-4': { id: 'task-4', content: 'Feed the cat' },
    'task-5': { id: 'task-5', content: 'Go for a walk' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5' ]
    },
  },
  // facilitate ordering of columns
  columnOrder: [['column-1']],
}

export default initialData