import Link from 'next/link'

export default function Partner() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <Link href="/" className="text-gray-600 hover:text-primary">홈</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">회사 소개</Link>
            <Link href="/partner" className="text-primary font-bold">파트너 모집</Link>
            <Link href="/system" className="text-gray-600 hover:text-primary">시스템 보안</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">문의</Link>
          </div>
        </div>
      </nav>

      {/* Partner Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">L-Core 파트너로 함께하세요.</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">소형 창업</h3>
              <p className="text-gray-600">키오스크 1대로 시작하는 소형 창업</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">전체 지원</h3>
              <p className="text-gray-600">본사가 장비·앱·서버 모두 제공</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">자동 정산</h3>
              <p className="text-gray-600">수익은 월 단위로 자동 정산</p>
            </div>
          </div>

          {/* Partner Levels */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">파트너 등급별 혜택</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Starter</h3>
                <p className="text-gray-600 mb-2">키오스크 수: 1~2대</p>
                <p className="text-primary font-bold">수익 배분: 40%</p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Booster</h3>
                <p className="text-gray-600 mb-2">키오스크 수: 3~5대</p>
                <p className="text-primary font-bold">수익 배분: 45%</p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Core Partner</h3>
                <p className="text-gray-600 mb-2">키오스크 수: 6대 이상</p>
                <p className="text-primary font-bold">수익 배분: 50% + 보너스</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 