import os
import subprocess
import webbrowser
import time

def run_commands():
    try:
        print("Node.js sunucusu başlatılıyor...")
        # Change to the BenimWebSite directory where server.js is located
        script_dir = os.path.dirname(os.path.abspath(__file__))
        os.chdir(script_dir)
        subprocess.run(['node', 'server.js'], check=True)
    except FileNotFoundError as e:
        if 'node' in str(e):
            print(f"Hata: 'node' komutu bulunamadı. Lütfen Node.js'in kurulu ve sistem yoluna ekli olduğundan emin olun.")
        else:
            print(f"Hata: Dosya bulunamadı - {e}")
    except subprocess.CalledProcessError as e:
        print(f"Hata: Komut yürütülürken bir sorun oluştu: {e}")
    except KeyboardInterrupt:
        print("\nSunucu kullanıcı tarafından durduruldu.")
if __name__ == '__main__':
    run_commands()
