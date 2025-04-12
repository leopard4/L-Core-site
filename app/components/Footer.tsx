import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">ⓒ 2025 L-Core. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-gray-300">개인정보 처리방침</Link>
            <Link href="/terms" className="hover:text-gray-300">이용약관</Link>
            <Link href="/business" className="hover:text-gray-300">사업자 정보</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 