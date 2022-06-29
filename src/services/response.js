const baseRes = async (api, resErr = null) => {
  try {
    const res = await api

    return {
      success: true,
      message: res.data?.message || 'success',
      data: res.data?.meta ? res.data : res.data?.data || res.data,
      code: res.status,
    }
  } catch (e) {
    let msg = e.message || 'Gagal load data mohon coba kembali'
    if (e.response?.data) {
      msg =
        e.response.data?.error_message ||
        'Terjadi kesalahan. Silahkan coba lagi nanti'
    }

    const payload = {
      success: false,
      message: msg,
      data: e.response?.status,
    }
    console.log(resErr)
    if (resErr) {
      resErr(payload)
    }

    return payload
  }
}

export { baseRes }
