import {
  HomeIcon,
  ListIcon,
  CheckIcon,
  TodoIcon,
} from '../components/Icons/Icons';

const menu = [
  {
    id: 1,
    title: 'All Tasks',
    icon: ({ ...props }) => <HomeIcon {...props} />,
    link: '/',
  },
  {
    id: 2,
    title: 'Important!',
    icon: ({ ...props }) => <ListIcon {...props} />,
    link: '/important',
  },
  {
    id: 3,
    title: 'Completed!',
    icon: ({ ...props }) => <CheckIcon {...props} />,
    link: '/completed',
  },
  {
    id: 4,
    title: 'Do It Now',
    icon: ({ ...props }) => <TodoIcon {...props} />,
    link: '/incomplete',
  },
];

export default menu;
