/**
 * Mock data for the app
 */

export const USERS = {
  me: {
    id: 'u1',
    name: '脑洞大开的阿杰',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    bio: '分享生活中的奇怪知识 | 业余科普',
    followers: '8.5k',
    following: '124',
    likes: '3.2w',
    impact: '99+',
  },
  creators: [
    {
      id: 'c1',
      name: '3分钟实验室',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gizmo',
      verified: true,
    },
    {
      id: 'c2',
      name: '历史这个瓜',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Midnight',
      verified: true,
    },
    {
      id: 'c3',
      name: '极客湾湾',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cuddles',
      verified: false,
    },
  ],
};

export const VIDEOS = [
  {
    id: 1,
    title: '为什么猫咪从来不摔伤？慢镜头下的物理学原理',
    desc: '角动量守恒定律在喵星人身上的完美体现...',
    author: USERS.creators[0],
    likes: '3.4w',
    comments: '892',
    favorites: '1.2w',
    tags: ['科普', '物理', '萌宠'],
    color: '#F97316', // Orange
    duration: '01:45',
  },
  {
    id: 2,
    title: '秦始皇其实没想烧书？被误解千年的历史真相',
    desc: '考古新发现揭秘焚书坑儒背后的真实故事。',
    author: USERS.creators[1],
    likes: '5.6w',
    comments: '2.3k',
    favorites: '4.5k',
    tags: ['历史', '冷知识', '反转'],
    color: '#EF4444', // Red
    duration: '04:12',
  },
  {
    id: 3,
    title: '手机电池寿命翻倍！这3个充电误区千万别踩',
    desc: '还在用到关机才充电？你的电池就是这样废掉的。',
    author: USERS.creators[2],
    likes: '1.1w',
    comments: '450',
    favorites: '9k',
    tags: ['科技', '生活技巧', '避坑'],
    color: '#3B82F6', // Blue
    duration: '02:05',
  },
  {
    id: 4,
    title: '学会这个心理学效应，让别人无法拒绝你的请求',
    desc: '登门槛效应在日常生活中的实战应用。',
    author: USERS.creators[0],
    likes: '2.8w',
    comments: '670',
    favorites: '1.5w',
    tags: ['心理学', '职场', '情商'],
    color: '#A855F7', // Purple
    duration: '03:30',
  },
];

export const CATEGORIES = ['推荐', '热榜', '黑科技', '冷知识', '生活', '心理', '职场', '艺术'];

