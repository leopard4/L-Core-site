import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <Link href="/" className="text-gray-600 hover:text-primary">홈</Link>
            <Link href="/about" className="text-primary font-bold">회사 소개</Link>
            <Link href="/partner" className="text-gray-600 hover:text-primary">파트너 모집</Link>
            <Link href="/system" className="text-gray-600 hover:text-primary">시스템 보안</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">문의</Link>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">L-Core는 이렇게 일합니다.</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">AI 기반 이미지 생성</h3>
              <p className="text-gray-600">단순 출력이 아닌, AI 기반 이미지 생성 기술로 차별화</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">자체 설계/운영</h3>
              <p className="text-gray-600">키오스크부터 서버까지 자체 설계/운영</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">파트너 시스템</h3>
              <p className="text-gray-600">누구나 창업 가능한 파트너 시스템 제공</p>
            </div>
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