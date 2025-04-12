import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">L-Core에 오신 것을 환영합니다.</h1>
          <p className="text-xl md:text-2xl mb-8">
            전국 어디서나 사진을 출력할 수 있는<br />
            차세대 이미지 키오스크 네트워크,<br />
            우리는 L-Core입니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">전국 20개 도시</h3>
              <p>이미지 생성 서버 운영 중</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">무인 키오스크</h3>
              <p>기반 스마트 사진 서비스</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">쉬운 설치</h3>
              <p>누구나 쉽게 설치 가능한 시스템</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <Link href="/about" className="text-gray-600 hover:text-primary">회사 소개</Link>
            <Link href="/partner" className="text-gray-600 hover:text-primary">파트너 모집</Link>
            <Link href="/system" className="text-gray-600 hover:text-primary">시스템 보안</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">문의</Link>
          </div>
        </div>
      </nav>
    </main>
  )
} 