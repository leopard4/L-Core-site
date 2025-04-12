import Link from 'next/link'
import AnimatedHero from './components/AnimatedHero'
import AnimatedButton from './components/AnimatedButton'

export default function Home() {
  const heroData = {
    title: "L-Core에 오신 것을 환영합니다.",
    description: "전국 어디서나 사진을 출력할 수 있는 차세대 이미지 키오스크 네트워크, 우리는 L-Core입니다.",
    features: [
      {
        title: "전국 20개 도시",
        description: "이미지 생성 서버 운영 중"
      },
      {
        title: "무인 키오스크",
        description: "기반 스마트 사진 서비스"
      },
      {
        title: "쉬운 설치",
        description: "누구나 쉽게 설치 가능한 시스템"
      }
    ]
  }

  return (
    <main className="min-h-screen">
      <AnimatedHero {...heroData} />

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 py-4">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors duration-200">
              홈
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary transition-colors duration-200">
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

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <AnimatedButton className="bg-primary text-white p-4 rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </AnimatedButton>
      </div>
    </main>
  )
} 