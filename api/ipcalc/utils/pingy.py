# api/ipcalc/utils/pingy.py

from concurrent.futures import ThreadPoolExecutor
from subprocess import getstatusoutput as get_status


def check_status(ip_address, packets=1):
    """
    Pings a single IP address, to ping a list, use `multi_ping()`

    Requires:
        'ip_address' - 'str' type; representing a single ip address (ex. '0.0.0.0')
    Optional:
        'packets' - 'int' type; represents number of packets to test with;
    """

    status, result = get_status(f"ping -c{packets} -i0.2 -w2 {ip_address}")

    if status is 0:
        ip_status = [ip_address, True]
        print(ip_status)
    else:
       ip_status = [ip_address, False]

    return ip_status


def multi_ping(ip_list, pool_size=None):
    """
   Pings a list of provided IP addresses and returns a list of responding
   addresses by passing them to `check_status()`

   Requires:
       'ip_list' - list; List of IP addresses
   Optional:
       'pool_size' - int; Can adjust the pool size
   """

    if not pool_size:
        pool_size = 50

    status_dict = {}

    while True:
        try:
            with ThreadPoolExecutor(max_workers=int(pool_size)) as executor:
                status_list = [ip_status for ip_status in executor.map(
                    check_status, ip_list) if ip_status]
            break
        except OSError as e:
            pool_size = 100

    return len(status_list)
