import Link from 'next/link'

export default function System() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <Link href="/" className="text-gray-600 hover:text-primary">홈</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">회사 소개</Link>
            <Link href="/partner" className="text-gray-600 hover:text-primary">파트너 모집</Link>
            <Link href="/system" className="text-primary font-bold">시스템 보안</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">문의</Link>
          </div>
        </div>
      </nav>

      {/* System Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">시스템 보안 및 권리</h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">소프트웨어 및 디자인</h3>
              <p className="text-gray-600">키오스크 소프트웨어 및 디자인은 본사 소유</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">파트너 권리</h3>
              <p className="text-gray-600">파트너는 브랜드와 시스템을 '사용'하는 권리만 가짐</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">계약 종료 시</h3>
              <p className="text-gray-600">계약 종료 시 모든 자료 및 로고 회수</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">계약 조항</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>비경쟁 조항</li>
                <li>기밀유지 계약</li>
                <li>지적재산 귀속 조항</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 