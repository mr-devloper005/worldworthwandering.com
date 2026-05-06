'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Reply, Flag, ChevronDown, ChevronUp, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { NoComments } from '@/components/shared/empty-states'
import type { Comment } from '@/types'
import { useAuth } from '@/lib/auth-context'
import { cn } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'
import { useToast } from '@/components/ui/use-toast'

interface CommentSectionProps {
  comments: Comment[]
}

export function CommentSection({ comments }: CommentSectionProps) {
  const [sortBy, setSortBy] = useState<'newest' | 'top'>('newest')
  const [newComment, setNewComment] = useState('')
  const { isAuthenticated, user } = useAuth()

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    }
    return b.likes - a.likes
  })

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // In production, this would send to API
      console.log('Submitting comment:', newComment)
      setNewComment('')
    }
  }

  return (
    <div className="space-y-6">
      {/* Modern Header with Glass Effect */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-xl animate-pulse"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{comments.length}</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Community
                </h2>
                <p className="text-purple-100 text-sm font-medium">Join {comments.length} voices</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSortBy('newest')}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  sortBy === 'newest' 
                    ? 'bg-white text-purple-600 shadow-lg scale-105' 
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <svg className="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Newest
              </button>
              <button
                onClick={() => setSortBy('top')}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  sortBy === 'top' 
                    ? 'bg-white text-purple-600 shadow-lg scale-105' 
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <svg className="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Unique Comment Composer */}
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
          {isAuthenticated ? (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm"></div>
                  <Avatar className="relative h-14 w-14 ring-4 ring-white">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold text-lg">{user?.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{user?.name}</p>
                  <p className="text-sm text-gray-500">Share something amazing...</p>
                </div>
              </div>
              <div className="relative">
                <Textarea
                  placeholder="What's on your mind? Write something thoughtful, inspiring, or just say hello!"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-40 resize-none border-2 border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 rounded-2xl text-base leading-relaxed transition-all duration-300"
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="p-2 rounded-xl bg-gray-100 hover:bg-purple-100 hover:text-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-xl bg-gray-100 hover:bg-purple-100 hover:text-purple-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={handleSubmitComment} 
                  disabled={!newComment.trim()}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-2xl px-8 py-4 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Share Your Thoughts
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative h-20 w-20 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Join the Conversation</h3>
              <p className="text-gray-600 mb-8 text-lg">Be part of our amazing community and share your ideas</p>
              <Button asChild className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-2xl px-10 py-4 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <a href="/login">Sign In to Join</a>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Comments List */}
      {sortedComments.length > 0 ? (
        <div className="space-y-6">
          {sortedComments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <NoComments />
      )}
    </div>
  )
}

function CommentItem({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) {
  const [isLiked, setIsLiked] = useState(comment?.isLiked || false)
  const [likesCount, setLikesCount] = useState(comment?.likes || 0)
  const [showReplies, setShowReplies] = useState(true)
  const [isReplying, setIsReplying] = useState(false)
  const [replyText, setReplyText] = useState('')
  const { isAuthenticated } = useAuth()
  const { toast } = useToast()

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      console.log('Submitting reply:', replyText)
      setReplyText('')
      setIsReplying(false)
    }
  }

  const handleLike = () => {
    if (!isAuthenticated) return
    setIsLiked(!isLiked)
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('relative', isReply && 'ml-12')}
    >
      {/* Unique Comment Card with Glass Effect */}
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
        <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
          {/* Header with Gradient */}
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 px-6 py-4 border-b border-purple-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-sm"></div>
                  <Avatar className="relative h-12 w-12 ring-3 ring-white">
                    <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold">{comment.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900 text-lg">{comment.author.name}</span>
                    {comment.author.isVerified && (
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-full">Verified</span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-base">{comment.content}</p>
          </div>
          
          {/* Actions Bar */}
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 px-6 py-3 border-t border-purple-100">
            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105',
                  isLiked ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-purple-100 hover:text-purple-600 shadow-sm'
                )}
              >
                <Heart className={cn('h-4 w-4', isLiked && 'fill-current')} />
                <span>{likesCount}</span>
              </button>
              {!isReply && (
                <button
                  onClick={() => setIsReplying(!isReplying)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm bg-white text-gray-600 hover:bg-purple-100 hover:text-purple-600 shadow-sm transition-all duration-300 hover:scale-105"
                >
                  <Reply className="h-4 w-4" />
                  <span>Reply</span>
                </button>
              )}
              <button
                onClick={() => toast({ title: 'Report submitted', description: 'We will review this comment.' })}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm bg-white text-gray-600 hover:bg-red-100 hover:text-red-600 shadow-sm transition-all duration-300 hover:scale-105"
              >
                <Flag className="h-4 w-4" />
                <span>Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reply Input */}
      <AnimatePresence>
        {isReplying && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-purple-100">
                <Textarea
                  placeholder="Write a thoughtful reply..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="mb-4 min-h-28 resize-none border-2 border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 rounded-2xl bg-purple-50/50 transition-all duration-300"
                />
                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    onClick={handleSubmitReply} 
                    disabled={!replyText.trim()}
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-2xl px-6 font-bold transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  >
                    <Reply className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    onClick={() => setIsReplying(false)}
                    className="rounded-2xl hover:bg-purple-100 font-semibold"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setShowReplies(!showReplies)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 transition-all duration-300 hover:scale-105 shadow-sm"
          >
            {showReplies ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span>{comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}</span>
          </button>
          <AnimatePresence>
            {showReplies && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4 pl-6 pt-4 border-l-2 border-gradient-to-b from-purple-300 to-pink-300"
              >
                {comment.replies.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} isReply />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  )
}
