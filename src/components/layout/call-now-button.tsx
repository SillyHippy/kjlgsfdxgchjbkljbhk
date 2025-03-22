'use client';

import Link from 'next/link';

export default function CallNowButton() {
  return (
    <div className="main_buttons lcb_main_area">
      <div className="callnow_area on one-whole lcb_call_now_area">
        <Link href="tel:918-638-2837" className="block">
          <div className="callnow_bottom call-now-button">
            <span className="b_callnow">Call Now</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
