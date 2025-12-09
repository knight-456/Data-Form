"use client";

import { useState, useEffect } from "react";
import {
  ArrowLeft,
  CreditCard,
  Building,
  Smartphone,
  Lock,
  Check,
  Star,
  Shield,
  CheckCircle,
  Tag,
  Mail,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { courseList } from "@/lib/data";
import {
  getPurchasedCoursesFromStorage,
  savePurchasedCoursesToStorage,
} from "@/lib/utils";

const paymentMethods = [
  {
    id: "card",
    name: "Card Payment",
    icon: CreditCard,
    desc: "Credit or Debit Card",
    badge: "Popular",
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: Building,
    desc: "Fast & Secure",
    badge: null,
  },
  {
    id: "upi",
    name: "UPI",
    icon: Smartphone,
    desc: "Google Pay, PhonePe",
    badge: "Instant",
  },
];

export default function CheckoutPage() {
  const { id } = useParams();
  const router = useRouter()

  const [selectedPayment, setSelectedPayment] = useState("card");
  const [showSuccess, setShowSuccess] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    paypalEmail: "",
    upiId: "",
    phoneNumber: "",
    agreeTerms: false,
  });

  const course = courseList?.find((courseItem) => courseItem?.id === id);

  useEffect(() => {
    if (showSuccess && redirectCountdown > 0) {
      const timer = setTimeout(
        () => setRedirectCountdown(redirectCountdown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [showSuccess, redirectCountdown]);

  useEffect(() => {
    if (showSuccess && redirectCountdown === 0)  {
      router.push(`/courses/${id}`)
    }
  }, [showSuccess, redirectCountdown])

  const handleSubmit = () => {
    if (
      selectedPayment === "card" &&
      (!formData.cardNumber ||
        !formData.cardName ||
        !formData.expiry ||
        !formData.cvv)
    ) {
      alert("Please fill in all card details");
      return;
    }
    if (selectedPayment === "paypal" && !formData.paypalEmail) {
      alert("Please enter your PayPal email");
      return;
    }
    if (selectedPayment === "upi" && !formData.upiId) {
      alert("Please enter your UPI ID");
      return;
    }
    if (!formData.email || !formData.agreeTerms) {
      alert("Please complete all required fields");
      return;
    }
    if (course) {
      const alreadyPurchasedCourses = getPurchasedCoursesFromStorage();

      const newCourseList = [{ id: course?.id }, ...alreadyPurchasedCourses];
      savePurchasedCoursesToStorage(newCourseList);
    }
    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const discount = (course?.originalPrice || 0) - (course?.price || 0);
  const discountPercent = course?.originalPrice
    ? Math.round((discount / course?.originalPrice) * 100)
    : 0;

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8">
          <div className="relative inline-flex">
            <div className="absolute w-32 h-32 bg-green-100 rounded-full animate-ping opacity-75"></div>
            <div className="relative w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
              <Check className="h-16 w-16 text-white" strokeWidth={3} />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Payment Successful! 🎉
            </h1>
            <p className="text-xl text-gray-600">
              You're all set to start learning
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={course?.image}
                alt={course?.title}
                className="w-20 h-20 rounded-xl object-cover shadow-md"
              />
              <div className="text-left flex-1">
                <h3 className="font-bold text-gray-900 text-lg">
                  {course?.title}
                </h3>
                <p className="text-sm text-gray-600">by {course?.instructor}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-500 text-xs mb-1">Order ID</p>
                <p className="font-mono font-bold text-gray-900">
                  #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-500 text-xs mb-1">Amount</p>
                <p className="font-bold text-gray-900 text-lg">
                  ${course?.price}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
              <p className="font-semibold mb-3">
                Redirecting in {redirectCountdown} seconds
              </p>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((5 - redirectCountdown) / 5) * 100}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={() => router?.push(`/courses/${id}`)}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Start Learning Now →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <header className="bg-white/80 backdrop-blur-lg border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 group">
              <div className="p-2 rounded-lg group-hover:bg-gray-100">
                <ArrowLeft className="h-5 w-5" />
              </div>
              <span className="font-semibold">Back</span>
            </button>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Contact Information
                  </h2>
                  <p className="text-sm text-gray-500">
                    Receipt will be sent here
                  </p>
                </div>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg outline-none text-black"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Payment Method
                  </h2>
                  <p className="text-sm text-gray-500">Choose how to pay</p>
                </div>
              </div>

              <div className="grid gap-4">
                {paymentMethods.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedPayment(m.id)}
                    className={`relative p-5 rounded-xl border-2 transition-all text-left group ${
                      selectedPayment === m.id
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedPayment === m.id
                            ? "border-blue-600 bg-blue-600"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedPayment === m.id && (
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-lg ${
                          selectedPayment === m.id
                            ? "bg-blue-100"
                            : "bg-gray-100"
                        }`}
                      >
                        <m.icon
                          className={`h-6 w-6 ${
                            selectedPayment === m.id
                              ? "text-blue-600"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-gray-900">
                            {m.name}
                          </span>
                          {m.badge && (
                            <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                              {m.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-600">{m.desc}</span>
                      </div>
                      {selectedPayment === m.id && (
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
              {selectedPayment === "card" && (
                <div className="space-y-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Card Details
                  </h3>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
                      />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="JOHN DOE"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 uppercase outline-none text-black"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
                      />
                    </div>
                  </div>
                </div>
              )}

              {selectedPayment === "paypal" && (
                <div className="space-y-5">
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      PayPal Payment
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Securely pay with PayPal
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      PayPal Email
                    </label>
                    <input
                      type="email"
                      name="paypalEmail"
                      value={formData.paypalEmail}
                      onChange={handleChange}
                      placeholder="your.paypal@email.com"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
                    />
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-900">
                        <p className="font-semibold mb-1">Secure Checkout</p>
                        <p className="text-blue-700">Encrypted by PayPal</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedPayment === "upi" && (
                <div className="space-y-5">
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      UPI Payment
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Pay instantly with UPI
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleChange}
                      placeholder="yourname@paytm"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-black"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Example: 9876543210@paytm
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Google Pay", "PhonePe", "Paytm"].map((app) => (
                      <div
                        key={app}
                        className="bg-gray-50 rounded-lg p-3 text-center border"
                      >
                        <Smartphone className="h-6 w-6 text-gray-600 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-gray-700">
                          {app}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1 h-5 w-5 text-blue-600 rounded border-gray-300 cursor-pointer text-black"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <span className="text-blue-600 font-semibold">Terms</span>{" "}
                    and{" "}
                    <span className="text-blue-600 font-semibold">
                      Privacy Policy
                    </span>
                  </span>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!formData.email || !formData.agreeTerms}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold text-lg py-5 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Complete Payment • ${course?.price}
              </button>

              <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Lock className="h-4 w-4" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white">
                <h2 className="text-lg font-bold mb-1">Order Summary</h2>
                <p className="text-blue-100 text-sm">Review your purchase</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex gap-4">
                  <img
                    src={course?.image}
                    alt={course?.title}
                    className="w-24 h-24 rounded-xl object-cover shadow-md"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 text-lg">
                      {course?.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      by {course?.instructor}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-gray-700">
                        {course?.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t">
                  {[
                    { l: "Level", v: course?.level },
                    { l: "Lessons", v: course?.lessons },
                    { l: "Duration", v: course?.duration },
                  ].map(({ l, v }) => (
                    <div
                      key={l}
                      className="text-center bg-gray-50 rounded-lg p-3"
                    >
                      <div className="text-xs text-gray-500 mb-1">{l}</div>
                      <div className="text-sm font-bold text-gray-900">{v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Original Price</span>
                  <span className="line-through">${course?.originalPrice}</span>
                </div>
                <div className="flex justify-between text-green-600 font-semibold">
                  <span className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Discount ({discountPercent}%)
                  </span>
                  <span>-${discount}</span>
                </div>
                <div className="border-t-2 border-dashed pt-3 flex justify-between text-2xl font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-blue-600">${course?.price}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-t-2 border-green-100 p-5">
                <div className="flex items-center gap-3 text-green-800">
                  <CheckCircle className="h-6 w-6" />
                  <div className="text-sm">
                    <div className="font-bold">30-Day Guarantee</div>
                    <div className="text-green-700">Full refund available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
