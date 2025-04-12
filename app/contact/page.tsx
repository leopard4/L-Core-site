import Link from 'next/link'

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <Link href="/" className="text-gray-600 hover:text-primary">홈</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">회사 소개</Link>
            <Link href="/partner" className="text-gray-600 hover:text-primary">파트너 모집</Link>
            <Link href="/system" className="text-gray-600 hover:text-primary">시스템 보안</Link>
            <Link href="/contact" className="text-primary font-bold">문의</Link>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">파트너 참여 및 제휴 문의</h1>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">연락처</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">대표 이메일:</p>
                  <a href="mailto:aksgml937@gmail.com" className="text-primary hover:underline">
                    aksgml937@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600">카카오톡 상담:</p>
                  <a href="https://open.kakao.com/o/sJWucPqh" className="text-primary hover:underline">
                    @lcore_official
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">제휴 신청</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">제휴 제안서 첨부:</p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <p className="text-gray-500">PDF 파일을 여기에 드래그하거나 클릭하여 업로드</p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href="https://forms.gle/your-form-link" 
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    구글폼 제휴 신청 바로가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 