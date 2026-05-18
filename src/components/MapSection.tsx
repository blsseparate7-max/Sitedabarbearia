import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

export default function MapSection() {
  const location = { lat: -23.303960, lng: -51.131250 }; // Rua Tremembés 1560, Londrina

  return (
    <section id="location" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-4 block">Onde Estamos</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">VISITE<br/><span className="text-white/20 italic">NOSSO ESPAÇO</span></h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 group">
                <div className="bg-white/5 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Endereço</h4>
                  <p className="text-white/60">Rua Tremembés, 1560 - Jd Ideal <br/> Londrina, PR</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="bg-white/5 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horários</h4>
                  <p className="text-white/60">Seg - Sex: Conferir no App <br/> Sáb: Conferir no App</p>
                </div>
              </div>

              <div className="flex gap-6 pt-4">
                <a href="#" className="text-white/40 hover:text-brand-yellow transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="text-white/40 hover:text-brand-yellow transition-colors"><Phone className="w-6 h-6" /></a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 h-[400px] lg:h-auto min-h-[400px] rounded-[3rem] overflow-hidden border border-white/10 relative">
            {!API_KEY ? (
               <div className="absolute inset-0 bg-white/5 flex items-center justify-center flex-col p-12 text-center">
                  <MapPin className="w-12 h-12 text-brand-yellow mb-4" />
                  <h3 className="text-xl font-bold mb-2">Mapa Indisponível</h3>
                  <p className="text-white/50 text-sm max-w-sm">Para visualizar o mapa interativo, adicione sua chave de API do Google Maps nas configurações.</p>
               </div>
            ) : (
              <APIProvider apiKey={API_KEY}>
                <Map
                  defaultCenter={location}
                  defaultZoom={15}
                  mapId="GBCORTES7_MAP"
                  internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                  className="w-full h-full"
                >
                  <AdvancedMarker position={location}>
                    <Pin background={'#FFD700'} glyphColor={'#000'} borderColor={'#C5A021'} />
                  </AdvancedMarker>
                </Map>
              </APIProvider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
