# api/ipcalc/utils/pingy.py

from concurrent.futures import ThreadPoolExecutor
from subprocess import getstatusoutput as get_status
from ipaddress import ip_address, ip_network


def verify_network(data, type):
    if type is "ip_address":
        try:
            ip_address(data)

        except ValueError as e:
            return False
        else:
            return True

    elif type is "subnet":
        try:
            network = ip_network(data, strict=False)
        except Exception as e:
            return False
        else:
            return network
    else:
        return "Invalid Option"


def pingy(ip_address, packets=1, verify=True):
    """
    Pings a single IP address, to ping a list, use `multi_ping()`

    WARNING: On MacOS this will report down, if testing please remove '-w2'
             when the ping command is issued

    Requires:
        'ip_address' - 'str' type; representing a single ip address (ex. '0.0.0.0')
    Optional:
        'packets' - 'int' type; represents number of packets to test with;
        'verify'  - 'Set to true to verify ip_address format'
    """

    if verify:
        if not verify_network(ip_address, 'ip_address'):
            raise ValueError(f"{ip_address} :: Invalid IP Address")

    status, result = get_status(f"ping -c{packets} -i0.2 -w2 {ip_address}")

    if status is 0:
        ip_status = "UP"
    else:
        ip_status = "DOWN"

    return {'ipAddress': ip_address,
            'status': ip_status}


def pingy_subnet(subnet, pool_size=None):
    """
   Pings a list of provided IP addresses and returns a list of responding
   addresses by passing them to `check_status()`

   Requires:
       'ip_list' - list; List of IP addresses
   Optional:
       'pool_size' - int; Can adjust the pool size
   """

    subnet_list = verify_network(subnet, 'subnet')

    if not subnet_list:
        raise ValueError(f"{subnet} :: Invalid Subnet")
    else:
        ip_list = [str(ip) for ip in subnet_list]

    if not pool_size:
        pool_size = 150

    while True:
        with ThreadPoolExecutor(max_workers=int(pool_size)) as executor:
            status_list = [ip_status for ip_status in executor.map(
                pingy, ip_list)]
        break

    return status_list
