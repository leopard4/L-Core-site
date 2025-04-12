import Link from 'next/link'
import AnimatedCard from '../components/AnimatedCard'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 py-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors duration-200">
              홈
            </Link>
            <Link href="/about" className="text-primary font-bold">
              회사 소개
            </Link>
            <Link href="/partner" className="text-gray-600 hover:text-primary transition-colors duration-200">
              파트너 모집
            </Link>
            <Link href="/system" className="text-gray-600 hover:text-primary transition-colors duration-200">
              시스템 보안
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors duration-200">
              문의
            </Link>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">
            L-Core는 이렇게 일합니다.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedCard 
              title="AI 기반 이미지 생성"
              description="단순 출력이 아닌, AI 기반 이미지 생성 기술로 차별화"
              delay={0.2}
            />
            <AnimatedCard 
              title="자체 설계/운영"
              description="키오스크부터 서버까지 자체 설계/운영"
              delay={0.4}
            />
            <AnimatedCard 
              title="파트너 시스템"
              description="누구나 창업 가능한 파트너 시스템 제공"
              delay={0.6}
            />
          </div>

          <div className="text-center">
            <p className="text-2xl italic text-gray-700">
              "혼자서도 가능한 사업, 함께 하면 더 넓게."
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 