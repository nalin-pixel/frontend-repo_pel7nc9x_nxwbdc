export default function Specs() {
  const specs = [
    { k: 'Display', v: '5.0" TFT, 540 x 960' },
    { k: 'Chipset', v: 'Quad-core 1.4 GHz' },
    { k: 'Memory', v: '1.5GB RAM, 8GB storage + microSD' },
    { k: 'Camera', v: 'Rear 8MP, Front 5MP (with flash)' },
    { k: 'Battery', v: 'Li-Ion 2600 mAh, removable' },
    { k: 'Ports', v: 'Micro-USB, 3.5mm jack' },
    { k: 'Network', v: '4G LTE (select regions)' },
    { k: 'OS', v: 'Android 6 base (upgradeable variants)' },
  ];

  return (
    <section id="specs" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 text-center">Specifications</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200">
          <table className="w-full text-sm">
            <tbody>
              {specs.map((row, i) => (
                <tr key={row.k} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                  <td className="w-40 md:w-64 p-4 font-medium text-neutral-800 border-b border-neutral-200">{row.k}</td>
                  <td className="p-4 text-neutral-600 border-b border-neutral-200">{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
