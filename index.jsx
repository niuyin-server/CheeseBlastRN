import React, { useState, useEffect } from 'react';
import {
    Home,
    Search,
    Plus,
    MessageCircle,
    User,
    Heart,
    Share2,
    Bookmark,
    ChevronLeft,
    MoreHorizontal,
    Play,
    Zap,
    PenTool,
    CheckCircle2,
    Flame,
    Lightbulb,
    Sparkles,
    Video
} from 'lucide-react';

// --- Mock Data (Updated for Edutainment) ---

const USERS = {
    me: {
        id: 'u1',
        name: '脑洞大开的阿杰',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        bio: '分享生活中的奇怪知识 | 业余科普',
        followers: '8.5k',
        following: '124',
        likes: '3.2w',
        impact: '99+' // "影响力" 或 "知识值"
    },
    creators: [
        { id: 'c1', name: '3分钟实验室', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gizmo', verified: true },
        { id: 'c2', name: '历史这个瓜', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Midnight', verified: true },
        { id: 'c3', name: '极客湾湾', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cuddles', verified: false },
    ]
};

const VIDEOS = [
    {
        id: 1,
        title: '为什么猫咪从来不摔伤？慢镜头下的物理学原理',
        desc: '角动量守恒定律在喵星人身上的完美体现...',
        author: USERS.creators[0],
        likes: '3.4w',
        comments: '892',
        favorites: '1.2w',
        tags: ['科普', '物理', '萌宠'],
        color: 'bg-orange-500',
        duration: '01:45'
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
        color: 'bg-red-600',
        duration: '04:12'
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
        color: 'bg-blue-600',
        duration: '02:05'
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
        color: 'bg-purple-500',
        duration: '03:30'
    }
];

const CATEGORIES = ['推荐', '热榜', '黑科技', '冷知识', '生活', '心理', '职场', '艺术'];

// --- Components ---

const BottomNav = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'home', icon: Home, label: '首页' },
        { id: 'search', icon: Search, label: '发现' },
        { id: 'add', icon: Plus, label: '发布', isSpecial: true },
        { id: 'msg', icon: MessageCircle, label: '消息' },
        { id: 'profile', icon: User, label: '我的' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 h-16 flex items-center justify-around px-2 z-40 pb-safe">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => item.id !== 'add' && setActiveTab(item.id)}
                    className={`flex flex-col items-center justify-center w-16 h-full space-y-1 transition-all duration-200 relative ${
                        activeTab === item.id ? 'text-black scale-105' : 'text-gray-400'
                    }`}
                >
                    {item.isSpecial ? (
                        <div className="w-12 h-9 bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg text-white transform hover:scale-110 transition-transform">
                            <item.icon size={24} strokeWidth={3} />
                        </div>
                    ) : (
                        <>
                            <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </>
                    )}
                </button>
            ))}
        </div>
    );
};

const VideoCard = ({ video, onClick }) => (
    <div
        onClick={() => onClick(video)}
        className="break-inside-avoid mb-3 bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
    >
        {/* Thumbnail Area */}
        <div className={`relative aspect-[9/14] ${video.color} flex items-center justify-center text-white/30 overflow-hidden group`}>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            <Play size={48} fill="currentColor" className="group-hover:scale-110 transition-transform duration-300"/>

            {/* Duration Badge */}
            <span className="absolute bottom-2 right-2 bg-black/50 text-white text-[10px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
        {video.duration}
      </span>

            {/* Top Left Tag */}
            <span className="absolute top-2 left-2 bg-white/20 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full border border-white/20">
        {video.tags[0]}
      </span>
        </div>

        <div className="p-3">
            <h3 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2 mb-2 h-10">
                {video.title}
            </h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                    <img src={video.author.avatar} alt={video.author.name} className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200" />
                    <span className="text-xs text-gray-500 truncate max-w-[60px]">{video.author.name}</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs font-medium">
                    <Heart size={12} className="mr-0.5" />
                    <span>{video.likes}</span>
                </div>
            </div>
        </div>
    </div>
);

const HomePage = ({ onVideoClick }) => {
    const [activeCat, setActiveCat] = useState('推荐');

    return (
        <div className="pb-20 pt-24 min-h-screen bg-gray-50">
            {/* Top Bar - More lively */}
            <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-40 border-b border-gray-100">
                <div className="flex items-center px-4 h-12 space-x-4">
                    <div className="flex-1 h-9 bg-gray-100 rounded-full flex items-center px-3 text-sm text-gray-400 transition-all hover:bg-gray-200 cursor-pointer">
                        <Search className="text-gray-400 mr-2" size={16} />
                        <span>搜点有趣的...</span>
                    </div>
                    <div className="relative">
                        <Zap className="text-yellow-500" size={24} fill="currentColor" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex overflow-x-auto px-4 pb-0 scrollbar-hide space-x-6 items-center h-11">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`text-sm font-bold whitespace-nowrap transition-all relative flex flex-col items-center ${
                                activeCat === cat ? 'text-black scale-105' : 'text-gray-400'
                            }`}
                        >
                            {cat}
                            {activeCat === cat && (
                                <span className="mt-1 w-4 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Waterfall */}
            <div className="px-2 columns-2 gap-2 space-y-2 pt-2">
                {VIDEOS.map(video => (
                    <VideoCard key={video.id} video={video} onClick={onVideoClick} />
                ))}
                {/* Repeat data for scrolling */}
                {VIDEOS.map(video => (
                    <VideoCard key={`dup-${video.id}`} video={{...video, id: `dup-${video.id}`}} onClick={onVideoClick} />
                ))}
            </div>
        </div>
    );
};

const PlayerPage = ({ video, onClose }) => {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [showNotes, setShowNotes] = useState(false);

    if (!video) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col animate-in fade-in duration-200">
            {/* Top Navigation */}
            <div className="absolute top-0 left-0 right-0 p-4 pt-12 flex justify-between items-start z-20 bg-gradient-to-b from-black/40 to-transparent">
                <button onClick={onClose} className="text-white/90 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
                    <ChevronLeft size={32} />
                </button>
                <div className="flex space-x-4">
                    <button className="text-white/90"><Search size={24}/></button>
                    <button className="text-white/90"><MoreHorizontal size={24}/></button>
                </div>
            </div>

            {/* Main Video Area */}
            <div className={`flex-1 relative flex items-center justify-center ${video.color}`}>
                <Play size={80} className="text-white/30 animate-pulse" fill="currentColor" />

                {/* Right Actions Bar */}
                <div className="absolute right-2 bottom-24 flex flex-col items-center space-y-6 z-20">
                    {/* Avatar & Follow */}
                    <div className="relative mb-2">
                        <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden">
                            <img src={video.author.avatar} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-full p-0.5 shadow-sm cursor-pointer">
                            <Plus size={12} strokeWidth={4} />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-5">
                        <button onClick={() => setLiked(!liked)} className="flex flex-col items-center space-y-1 group">
                            <Heart size={32} className={`transition-all duration-200 ${liked ? 'text-red-500 fill-red-500 scale-110' : 'text-white group-active:scale-90'}`} />
                            <span className="text-white text-xs font-bold drop-shadow-md">{liked ? '已赞' : video.likes}</span>
                        </button>

                        <button className="flex flex-col items-center space-y-1 group">
                            <MessageCircle size={30} className="text-white group-active:scale-90 transition-transform" />
                            <span className="text-white text-xs font-bold drop-shadow-md">{video.comments}</span>
                        </button>

                        <button onClick={() => setBookmarked(!bookmarked)} className="flex flex-col items-center space-y-1 group">
                            <Bookmark size={30} className={`transition-all duration-200 ${bookmarked ? 'text-yellow-400 fill-yellow-400' : 'text-white group-active:scale-90'}`} />
                            <span className="text-white text-xs font-bold drop-shadow-md">{bookmarked ? '已收藏' : '收藏'}</span>
                        </button>

                        <button className="flex flex-col items-center space-y-1 group">
                            <Share2 size={30} className="text-white group-active:scale-90 transition-transform" />
                            <span className="text-white text-xs font-bold drop-shadow-md">分享</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Info Area */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10">
                    <div className="mb-3 flex items-center space-x-2">
                        <span className="text-white font-bold text-lg drop-shadow-md tracking-wide">@{video.author.name}</span>
                        {video.author.verified && (
                            <span className="text-yellow-400">
                 <CheckCircle2 size={14} fill="currentColor" className="text-black" />
               </span>
                        )}
                    </div>

                    <h1 className="text-white text-[15px] leading-relaxed mb-2 max-w-[85%] font-medium drop-shadow-sm">
                        {video.title}
                    </h1>
                    <p className="text-gray-300 text-xs line-clamp-2 max-w-[80%] mb-3">
                        {video.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {video.tags.map(tag => (
                            <span key={tag} className="text-xs text-white/90 bg-white/10 px-2 py-1 rounded backdrop-blur-md font-medium"># {tag}</span>
                        ))}
                    </div>

                    {/* Feature: Quick Note (Edutainment style) */}
                    <div className="flex space-x-3 items-center">
                        <button
                            onClick={() => setShowNotes(!showNotes)}
                            className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-full py-2 px-4 flex items-center justify-center space-x-2 transition-all active:scale-95"
                        >
                            <Lightbulb size={16} className="text-yellow-300" />
                            <span className="text-xs font-medium">Get 知识点</span>
                        </button>
                        <div className="text-xs text-white/50 flex items-center">
                            <Flame size={14} className="text-red-500 mr-1" fill="currentColor"/> 热度飙升
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-0.5 bg-white/20 w-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-2/3 bg-white relative"></div>
            </div>

            {/* Notes Drawer */}
            {showNotes && (
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-white rounded-t-3xl z-30 p-5 flex flex-col animate-in slide-in-from-bottom duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                    <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center space-x-2">
                            <Sparkles className="text-yellow-500" size={20}/>
                            <h3 className="font-bold text-lg text-gray-800">知识闪念</h3>
                        </div>
                        <button onClick={() => setShowNotes(false)} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">✕</button>
                    </div>
                    <div className="flex-1 bg-orange-50 rounded-2xl p-4 text-sm text-gray-700 overflow-y-auto border border-orange-100 mb-4">
                        <div className="text-orange-800/50 text-xs font-bold mb-2 uppercase tracking-wider">My Notes</div>
                        <p className="mb-3">✨ 角动量守恒：猫咪在空中通过旋转上半身和下半身来调整姿态，无需外力扭矩。</p>
                        <p className="text-gray-400 text-xs mt-4 border-t border-orange-200 pt-2">记录于 00:42</p>
                    </div>
                    <button className="bg-black text-white py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-gray-800 transition-all active:scale-95 flex items-center justify-center">
                        <CheckCircle2 size={16} className="mr-2"/> 保存到我的知识库
                    </button>
                </div>
            )}
        </div>
    );
};

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('works');

    return (
        <div className="pb-20 min-h-screen bg-white">
            {/* Simple clean Header */}
            <div className="relative h-40 bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 opacity-80"></div>
                <div className="absolute top-4 right-4 flex space-x-3">
                    <div className="bg-white/60 p-2 rounded-full cursor-pointer hover:bg-white transition-colors"><Share2 size={18} className="text-gray-700"/></div>
                    <div className="bg-white/60 p-2 rounded-full cursor-pointer hover:bg-white transition-colors"><MoreHorizontal size={18} className="text-gray-700"/></div>
                </div>
            </div>

            <div className="px-5 relative">
                {/* Avatar pushed up */}
                <div className="-mt-12 mb-3 relative inline-block">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                        <img src={USERS.me.avatar} alt="Me" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full border-2 border-white">
                        <Plus size={12} strokeWidth={4} />
                    </div>
                </div>

                {/* User Info */}
                <div className="mb-6">
                    <h1 className="text-2xl font-black text-gray-900 mb-1">{USERS.me.name}</h1>
                    <p className="text-gray-500 text-xs mb-3 flex items-center">
                        ID: {USERS.me.id}8293
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-[10px]">IP: 上海</span>
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed max-w-xs">{USERS.me.bio}</p>
                </div>

                {/* Creator Stats - More community focused */}
                <div className="flex items-center justify-between mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="text-center flex-1">
                        <div className="font-black text-lg text-gray-900">{USERS.me.likes}</div>
                        <div className="text-xs text-gray-400 font-medium">获赞与收藏</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center flex-1">
                        <div className="font-black text-lg text-gray-900">{USERS.me.following}</div>
                        <div className="text-xs text-gray-400 font-medium">关注</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center flex-1">
                        <div className="font-black text-lg text-gray-900">{USERS.me.followers}</div>
                        <div className="text-xs text-gray-400 font-medium">粉丝</div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mb-8">
                    <button className="flex-1 bg-gray-900 text-white py-2.5 rounded-xl text-sm font-bold shadow-md active:scale-95 transition-transform">编辑资料</button>
                    <button className="flex-1 bg-gray-100 text-gray-900 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center space-x-1 active:scale-95 transition-transform">
                        <Video size={16} />
                        <span>创作中心</span>
                    </button>
                </div>
            </div>

            {/* Profile Tabs */}
            <div className="border-b border-gray-100 sticky top-12 bg-white z-10 px-2">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab('works')}
                        className={`flex-1 py-3 text-sm font-bold relative transition-colors ${activeTab === 'works' ? 'text-black' : 'text-gray-400'}`}
                    >
                        作品 0
                        {activeTab === 'works' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab('likes')}
                        className={`flex-1 py-3 text-sm font-bold relative transition-colors ${activeTab === 'likes' ? 'text-black' : 'text-gray-400'}`}
                    >
                        收藏 128
                        {activeTab === 'likes' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full" />}
                    </button>
                    <button
                        onClick={() => setActiveTab('private')}
                        className={`flex-1 py-3 text-sm font-bold relative transition-colors ${activeTab === 'private' ? 'text-black' : 'text-gray-400'}`}
                    >
                        私密 2
                        {activeTab === 'private' && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-black rounded-full" />}
                    </button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-1 min-h-[200px]">
                {activeTab === 'works' ? (
                    <div className="col-span-3 flex flex-col items-center justify-center py-16 text-gray-400 space-y-4">
                        <div className="bg-gray-50 p-6 rounded-full">
                            <Video size={40} className="text-gray-300" />
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold text-gray-800">开启你的创作之旅</p>
                            <p className="text-xs mt-1">分享知识，连接世界</p>
                        </div>
                        <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all active:scale-95">
                            发布第一条视频
                        </button>
                    </div>
                ) : (
                    // Mock content for other tabs
                    VIDEOS.map((video, i) => (
                        <div key={i} className={`aspect-[3/4] ${video.color} relative overflow-hidden cursor-pointer`}>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 pt-6">
                                <div className="text-white text-[10px] flex items-center font-medium">
                                    <Play size={10} className="mr-1" fill="currentColor"/> {video.likes}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// --- Main App ---

export default function EduShortVideoApp() {
    const [activeTab, setActiveTab] = useState('home');
    const [currentVideo, setCurrentVideo] = useState(null);

    return (
        <div className="font-sans max-w-md mx-auto bg-white h-screen overflow-hidden shadow-2xl relative flex flex-col selection:bg-pink-200">
            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto scrollbar-hide bg-white">
                {activeTab === 'home' && <HomePage onVideoClick={setCurrentVideo} />}
                {activeTab === 'search' && <div className="pt-40 text-center text-gray-400 font-medium">
                    <p>🔥 热门话题榜</p>
                    <p className="text-xs mt-2 opacity-50">功能开发中...</p>
                </div>}
                {activeTab === 'msg' && <div className="pt-40 text-center text-gray-400 font-medium">
                    <p>💬 消息通知</p>
                    <p className="text-xs mt-2 opacity-50">功能开发中...</p>
                </div>}
                {activeTab === 'profile' && <ProfilePage />}
            </div>

            {/* Bottom Navigation */}
            <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Video Player Overlay */}
            {currentVideo && (
                <PlayerPage video={currentVideo} onClose={() => setCurrentVideo(null)} />
            )}
        </div>
    );
}
