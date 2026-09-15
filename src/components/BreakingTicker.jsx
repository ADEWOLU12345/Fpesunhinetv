function BreakingTicker() {
  return (
    <div className="bg-red-600 text-white overflow-hidden">
      <div className="flex">

        <div className="bg-red-800 px-5 py-3 font-bold whitespace-nowrap">
          BREAKING NEWS
        </div>

        <div className="overflow-hidden w-full">
          <div className="animate-marquee whitespace-nowrap py-3">
            🎓 Federal Polytechnic Ede Happy Resumtion next week • 📚  Applications are now open • 💼 Notification of result is available • 🎤 FPE Sunshine TV welcomes all Happy Resumtion 
          </div>
        </div>

      </div>
    </div>
  );
}

export default BreakingTicker;